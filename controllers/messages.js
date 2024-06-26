let conn = require('../models/db_conn')
let table_messages = require('../models/table_messages')
const jwt = require("jsonwebtoken");
// const {SECRET}=process.env;

const SECRET = 'rayChatPlat'

/**
 * 新增聊天室訊息
 */
async function insMessage(request, response) {

    const data = request.body;
    const params = request.query;
    let loginToken = (params.loginInfo != undefined) ? params.loginInfo.loginToken : null

    const connection = await conn.getConnection();
    try {

        let decoded = jwt.verify(loginToken, SECRET);
        let login_email = decoded.EMAIL;

        let item = jwt.verify(data.item.token, SECRET);
        let ROOMID = item.ROOMID

        let text = data.item.text;
        let textType = data.item.textType;

        // 新增訊息
        let ins_message = await table_messages.insMessage(connection,ROOMID,text,textType,login_email)
        if (!ins_message.done_TF) {
            throw ins_message;
        }

        let get_messages = await table_messages.getMessages(connection,ROOMID)

        response.status(200).json({
            status: 'success',
            get_messages: get_messages,
            message: 'Success',
        });

    } catch (e) {
        response.status(500).json({
            status: 'error',
            code: 500,
            data: e,
            loginToken: loginToken,
            message: 'Internal Server Error',
        });
    } finally {
        connection.release();
    }
}


/**
 * 查詢聊天室訊息
 */
async function getMessage(request, response) {

    const data = request.body;

    const connection = await conn.getConnection();
    try {
        let item = jwt.verify(data.item.token, SECRET);
        let ROOMID = item.ROOMID

        // 驗證信箱格式
        let get_messages = await table_messages.getMessages(connection,ROOMID)

        response.status(200).json({
            status: 'success',
            ROOMID: ROOMID,
            get_messages: get_messages,
            message: 'Success',
        });

    } catch (e) {
        response.status(500).json({
            status: 'error',
            code: 500,
            data: e,
            message: 'Internal Server Error',
        });
    } finally {
        connection.release();
    }
}

/**
 * 帳號相關api
 */
exports.messages = (request, response) => {   //獲取info表全部數據

    const params = request.query;

    if (params.method=='insMessage') {
        insMessage(request, response)
    } else if (params.method=='getMessage') {
        getMessage(request,response);
    }
    /**
     * 錯誤呼叫
     */
    else {
        response.status(500).json({
            status: 'error',
            code: 500,
            message: '方法錯誤!',
        });
    }

}