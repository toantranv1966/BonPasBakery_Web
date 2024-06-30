Ngày 8h00 13/6/2024 - 11h30 14/6/2024
Restore Project & check

Edit Footer

Slider Carousel

Ngày 10h30 15/6/2024
Chỉnh sửa :
CHÍNH SÁCH
Chính sách hoạt động
Chính sách và quy định
Chính sách bảo mật thông tin

Ngày 16/6/2024 09h00 -- 16h00
Choose Address On Google Map

ChatGPT build my-map-app : 
Thay đổi địa điểm thanh toán US (Billing)
Kiểm tra chức năng chọn địa điểm trên bản đồ
Finish

ChatGPT sửa lỗi MapScreen hiển thị bản đồ không đúng cách (do bất đồng bộ không có giá trị)
Đã lấy được địa chỉ location
Next : Hiển thị địa chỉ trên trang Shipping Info & lưu trạng thái địa chỉ 

  60. Email order receipt by mailgun
     1.  create mailgun account
     2.  add and verify your domain to mailgun
     3.  install mailgun-js
     4.  set api key in env file
     5.  change pay order in orderRouter
     6.  send email the 

15h ngày 22/6/2024 (Không thành công)
### Part 26- Upload Product Images On AWS S3

This section is about uploading images amazon aws s3 cloud server.

1. create aws account
2. open https://s3.console.aws.amazon.com
3. create public bucket as amazona
4. create api key and secret
5. past it into .env as accessKeyId and secretAccessKey
6. move dotenv to config.js
7. add accessKeyId and secretAccessKey to config.js
8. npm install aws-sdk multer-s3
9. routes/uploadRoute.js
10. set aws.config.update to config values
11. create s3 from new aws.S3()
12. create storageS3 from multerS3 by setting s3, bucket and acl
13. set uploadS3 as multer({ storage: storageS3 })
14. router.post('/s3', uploadS3.single('image'))
15. return req.file.location
16. ProductsScreen.js
17. on handleUploadImage set axios.post('api/uploads/s3')
18. check result on website and s3

Ngày 28/6/2024 : Sửa lỗi categories hoạt đông không đúng.

  <!-- Sửa lỗi  -->
    rm -rf node_modules
    rm -rf package-lock.json
    npm cache clean --force
    npm list --depth=0 : Kiểm tra phiên bản dependencies


    <!-- Cài đặt đúng phiên bản  -->

npm install @paypal/react-paypal-js@^7.6.0
npm install @react-google-maps/api@^2.8.1
npm install @testing-library/jest-dom@^5.16.2
npm install @testing-library/react@^12.1.2
npm install @testing-library/user-event@^13.5.0
npm install axios@^0.25.0
npm install bootstrap@^5.1.3
npm install react@^17.0.2
npm install react-bootstrap@^2.1.2
npm install react-dom@^17.0.2
npm install react-google-charts@^4.0.0
npm install react-helmet-async@^1.2.2
npm install react-icons@^4.3.1
npm install react-router-bootstrap@^0.26.0
npm install react-router-dom@^6.2.1
npm install react-scripts@^5.0.0
npm install react-toastify@^8.2.0
npm install styled-components@^5.3.5
npm install web-vitals@^2.1.4

npm install use-reducer-logger@^1.0.2 --force



<!-- No Install Không sử dụng -->
npm install react-messenger-customer-chat@^0.8.0
npm install tw-elements@^1.0.0-alpha12



