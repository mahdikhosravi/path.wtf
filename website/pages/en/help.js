/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content:
        "هیچ چیز اندازه‌ی معرفی کردن ما به دوستانتون نمی‌تونه به ما کمک کنه",
      title: "ما رو به بقیه معرفی کنید"
    },
    {
      content: "هر قدر بیشتر باشیم، زودتر می‌تونیم به هدفمون برسیم",
      title: "تولید محتوا"
    },
    {
      content: "ما خوشحال می‌شیم :)",
      title: "حمایت مالی"
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>ما به کمک نیاز داریم</h1>
          </header>
          <p>
            هدف ما کمک به تمام افرادیست که می‌خواهند برنامه‌نویس و توسعه‌دهنده
            باشند. این هدف محقق نمی‌شود مگر با کمک شما عزیزان.
            <br /> اگر علاقه دارید با ما همکاری کنید، با حساب
            <a href="https://github.com/path-wtf"> گیت‌هاب</a> ما تماس بگیرید.
            <br />
            همچنین می‌توانید با معرفی ما به دوستانتان در این مسیر به ما کمک
            کنید.
            <br />
            در نهایت، هر فعالیتی هزینه دارد. اگر علاقه دارید به ما در پرداخت
            هزینه‌ها کمک کنید، می‌توانید از طریق{" "}
            <a href="https://payping.ir/d/9Kyl"> پی‌پینگ</a> کمک‌های خود را به
            دست ما برسانید.
            <br />
            اگر معتقید به شیوه‌ی دیگری می‌توانید به ما کمک کنید، با{" "}
            <a href="http://telegram.me/khosi"> خسی</a> در تلگرام تماس بگیرید :)
          </p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
