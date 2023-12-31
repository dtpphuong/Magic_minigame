const question = [
{ id: 1, content: 'Nếu bạn có thể tham gia vào một chương trình truyền hình nổi tiếng, bạn muốn tham gia vào chương trình nào?' },
{ id: 2, content: 'Nếu bạn có thể gặp một người nổi tiếng (người còn sống hoặc đã qua đời), bạn muốn gặp người đó để nói chuyện về điều gì?' },
{ id: 3, content: 'Nếu bạn có thể trải nghiệm một ngày như một loài động vật, bạn muốn trải nghiệm cuộc sống như loài động vật nào?' },
{ id: 4, content: 'Nếu bạn có thể thay đổi một quyền lợi xã hội, bạn sẽ thay đổi quyền lợi gì?' },
{ id: 5, content: 'Nếu bạn có thể trở thành một nhân vật huyền thoại, bạn muốn trở thành nhân vật nào?' },
{ id: 6, content: 'Nếu bạn có thể tham gia vào một lễ hội truyền thống trên thế giới, bạn muốn tham gia lễ hội nào?' },
{ id: 7, content: 'Nếu bạn có thể đặt một câu hỏi cho một người nổi tiếng, bạn muốn hỏi điều gì?' },
{ id: 8, content: 'Nếu bạn có thể trở thành một siêu anh hùng, bạn muốn có siêu năng lực gì?' },
{ id: 9, content: 'Nếu bạn có thể thay đổi kết quả của một sự kiện lịch sử, bạn muốn thay đổi sự kiện nào?' },
{ id: 10, content: 'Nếu bạn có thể sống ở một thời đại lịch sử khác, bạn muốn sống ở thời đại nào?' },
{ id: 11, content: 'Cuộc sống có ý nghĩa thế nào đối với bạn?' },
{ id: 12, content: 'Nếu bạn có thể thay đổi một điều duy nhất trong cuộc đời, đó sẽ là gì?' },
{ id: 13, content: 'Hãy mô tả một ngày hoàn hảo của bạn.' },
{ id: 14, content: 'Nếu bạn có thể gặp bất kỳ người nổi tiếng nào, bạn sẽ gặp ai?' },
{ id: 15, content: 'Nếu bạn có thể đi du lịch đến bất kỳ đâu, bạn sẽ đến đâu?' },
{ id: 16, content: 'Nếu bạn có thể thay đổi thành người nổi tiếng trong một ngày, bạn sẽ là ai?' },
{ id: 17, content: 'Nếu bạn có thể có một siêu năng lực, đó sẽ là gì?' },
{ id: 18, content: 'Nếu bạn có một triệu đô la, bạn sẽ làm gì?' },
{ id: 19, content: 'Nếu bạn có thể sống ở bất kỳ nơi nào trên trái đất, bạn sẽ sống ở đâu?' },
{ id: 20, content: 'Nếu bạn có thể thay đổi một sự kiện lịch sử, bạn sẽ thay đổi điều gì?' },
{ id: 21, content: 'Nếu bạn có thể ăn một món ăn suốt đời, đó sẽ là món gì?' },
{ id: 22, content: 'Nếu bạn có thể biến thành một loài động vật, bạn sẽ biến thành loài gì?' },
{ id: 23, content: 'Nếu bạn có thể trở thành một nhân vật huyền thoại, bạn sẽ trở thành ai?' },
{ id: 24, content: 'Nếu bạn có thể gặp người ngoài hành tinh, bạn sẽ đặt cho họ một câu hỏi gì?' },
{ id: 25, content: 'Nếu bạn có thể thực hiện một điều kỳ diệu, đó sẽ là điều gì?' },
{ id: 26, content: 'Nếu bạn có thể du lịch xuyên không đến một thời điểm trong lịch sử, bạn sẽ đến thời điểm nào?' },
{ id: 27, content: 'Nếu bạn có thể thay đổi màu sắc của trời, bạn sẽ chọn màu gì?' },
{ id: 28, content: 'Nếu bạn có thể học một ngôn ngữ mới chỉ trong một ngày, bạn sẽ chọn ngôn ngữ nào?' },
{ id: 29, content: 'Nếu bạn có thể thực hiện một phép màu, bạn sẽ làm gì với nó?' },
{ id: 30, content: 'Nếu bạn có thể biến thành một nhân vật trong một cuốn sách, bạn sẽ là nhân vật nào?' },
{ id: 31, content: 'Nếu bạn có thể thay đổi điều gì đó trong thế giới hiện tại, bạn sẽ thay đổi gì?' },
{ id: 32, content: 'Nếu bạn có thể có một bữa tối với bất kỳ nhân vật lịch sử nào, bạn sẽ mời ai?' },
{ id: 33, content: 'Nếu bạn có thể trở thành một vị vua hoặc nữ hoàng trong một ngày, bạn sẽ làm gì?' },
{ id: 34, content: 'Nếu bạn có thể thực hiện một giấc mơ, bạn sẽ chọn giấc mơ nào?' },
{ id: 35, content: 'Nếu bạn có thể tạo ra một phần mềm ứng dụng, bạn sẽ tạo ứng dụng gì?' },
{ id: 36, content: 'Nếu bạn có thể thay đổi một quy tắc xã hội, bạn sẽ thay đổi quy tắc gì?' },
{ id: 37, content: 'Nếu bạn có thể trải nghiệm một ngày như một người nổi tiếng, bạn sẽ làm gì trong ngày đó?' },
{ id: 38, content: 'Nếu bạn có thể du lịch qua thời gian, bạn sẽ đến một sự kiện lịch sử nào?' },
{ id: 39, content: 'Nếu bạn có thể biến thành một vật thể, bạn sẽ biến thành vật thể gì?' },
{ id: 40, content: 'Nếu bạn có thể có một bữa tối với bất kỳ người nổi tiếng nào, bạn sẽ chọn ai?' },
{ id: 41, content: 'Nếu bạn có thể biết được một điều bí mật về người nào đó, bạn muốn biết điều gì?' },
{ id: 42, content: 'Nếu bạn có thể tham gia vào một sự kiện lịch sử, bạn muốn tham gia vào sự kiện nào?' },
{ id: 43, content: 'Nếu bạn có thể đặt một câu hỏi cho mọi người trên thế giới, bạn sẽ hỏi câu gì?' },
{ id: 44, content: 'Nếu bạn có thể tạo ra một sản phẩm hoàn hảo, đó sẽ là sản phẩm gì?' },
{ id: 45, content: 'Nếu bạn có thể trải nghiệm một ngày trong cuộc sống của một người nổi tiếng, bạn muốn trải nghiệm ngày đó như thế nào?' },
{ id: 46, content: 'Nếu bạn có thể sống ở bất kỳ thành phố nào trên thế giới, bạn sẽ sống ở thành phố nào?' },
{ id: 47, content: 'Nếu bạn có thể thay đổi một kỹ năng của mình, bạn muốn thay đổi kỹ năng gì?' },
{ id: 48, content: 'Nếu bạn có thể trải nghiệm một ngày như một nhân vật hoạt hình, bạn muốn trải nghiệm cuộc sống như nhân vật nào?' },
{ id: 49, content: 'Nếu bạn có thể thay đổi một quy tắc trong ngành công nghiệp của bạn, bạn sẽ thay đổi quy tắc gì?' },
{ id: 50, content: 'Nếu bạn có thể ăn một món ăn suốt đời, đó sẽ là món gì?' },
];

export default question