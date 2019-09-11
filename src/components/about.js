import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h1 className="colorlib-about">Phân loại chính</h1>
                    <p>Sự ra đời của Macbook được xem là một cuộc cách mạng thật sự với dòng sản phẩm máy tính xách tay với những sản phẩm Macbook Air, Macbook Pro và IMAC. Với những đặc điểm vượt trội trong thiết kế cùng bộ xử lý ưu việt, MacBook đem đến nhiều trải nghiệm hoàn hảo dành cho các tín đồ công nghệ.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <h1 href="https://www.facebook.com/nguyenquocuy1102" target="_blank" rel="noopener noreferrer" className="colorlib-about">Theo chuyên môn</h1>
                <h2 className="colorlib-heading"></h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3> Macbook Air </h3>
                    <p>Thiết kế mỏng nhẹ, cực kỳ sexy, tới giờ mình vẫn thích thiết kế hiện tại của MacBook Air dù nó đã tồn tại được hơn 7 năm.</p>
                    <p>Pin lâu, Apple quảng cáo pin của MacBook Air có thể lên hơn 12 tiếng, thực tế sử dụng mình đã từng lên hơn 10 tiếng mà vẫn bật Wi-Fi xả láng, chẳng có gì phải lo.</p>
                    <p>ấu hình ổn cho các nhu cầu bình thường không liên quan nhiều tới đồ họa hay xử lý, tính toán khoa học, xử lý dữ liệu. Tất cả những nhu cầu văn phòng như chỉnh văn bản, lướt web, bảng tính, thuyết trình... đều có thể chạy nhanh trên MacBook Air.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Macbook Pro</h3>
                    <p>MacBook Pro có cấu hình cực kì mạnh mẽ,thiết kế hoàn mĩ. Bù lại bạn có thêm cổng USB-C mới, bạn có chip mạnh, GPU mạnh hơn, và đương nhiên có màn hình Retina đẹp lung linh.</p>
                    <p>Thiết kế đơn giản, hiện đại, màu sắc nhẹ ngành nhưng đẳng cấp.</p>
                    <p>Cấu hình cao, hiệu năng làm việc tốt.</p>
                    <p>Thời lượng sự dụng pin lâu</p>
                    <p>Màn hình sắc nét, màu sắc tươi sáng</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>IMAC</h3>
                    <p>Từ lâu các thiết kế của iMac đã được đánh giá rất cao không chỉ bởi các chuyên gia mà còn cả những người tiêu dùng đông đảo trên toàn thế giới. Không ngừng nỗ lực và cải tiến để mang đến cho khách hàng sự trải nghiệm tốt nhất, các đời imac liên tiếp được ra đời trong hơn 10 năm thực sự không làm người dùng thất vọng.</p>
                    <p>Chuyển đổi trải nghiệm máy tính để bàn bằng cách lắp công nghệ mạnh mẽ, dễ sử dụng vào một thiết kế thanh lịch, tất cả trong một. Mang đến cho bạn những công cụ tuyệt vời hơn nữa để làm bất cứ điều gì</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
