# Lai-go
這是一款社交平台，可以實現聊天、發文、留言、按讚以及購買貼圖等基本功能。

## 專案需求說明
* 聊天室介面可與其他使用者聊天
* 瀏覽文章介面可發文功能
* 在瀏覽文章介面可給文章愛心及留言
* 購買貼圖介面可做購買及販賣個人貼圖操作

## 第三方應用

### google OAuth2
1. 進入 Google API Console
2. 建立憑證->OAuth 2.0 用戶端 ID
3. 設定已授權JavaScript來源

### google recaptcha
* [設定網域](https://www.google.com/recaptcha/about/)

### Line Pay API
* [Line Pay API](https://pay.line.me/tw/developers/apis/onlineApis?locale=zh_TW)

### 綠界金流 API
* [綠界金流API](https://developers.ecpay.com.tw/?p=2856)

## 專案檔說明

<table>
    <tr>
      <td>資料夾名稱</td>
	<td>說明</td>
		  <td>備註</td>
    </tr>
	  <tr>
      <td>config</td>
		  <td>log4js設定檔</td>
		  <td></td>
    </tr>
	  <tr>
      <td>dist</td>
		  <td>靜態文件</td>
		  <td>該專案為Vue build後的靜態文件</td>
    </tr>
	  <tr>
      <td>public</td>
		  <td>存放檔案或圖片的資料夾</td>
		  <td>上傳大頭照檔案位置</td>
    </tr>
	  <tr>
      <td>views</td>
		  <td>另外顯示</td>
		  <td>綠界科技template</td>
    </tr>
</table>


## 系統環境

* 資料庫環境: MySQL 8.0

## 開發環境

* 開發環境 IntelliJ IDEA 2021.3.1

## 建置作業
1. npm install
2. 建立.env
3. 確定資料庫連線字串是否可以連線
6. 建置
7. Run

## 雲端部署

### 雲端環境

* 資料庫: Azure MySQL
* 主機: Azure App Service Web Apps

## 套件說明

### npm 套件
* 專案套件皆使用npm套件統一管理
* 若需要詳細版本，請參閱個專案的packages.json
