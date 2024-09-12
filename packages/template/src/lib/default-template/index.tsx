import { MapPin, Phone, Mail, Cake, Link, Github } from "lucide-react";
import { BlockProps, Page } from "@resume/shared";
import "./index.scss";
import dayjs from "dayjs";
export interface IProps {
  config: Page;
}
export default function DefaultTemplate(props: IProps) {
  const { config } = props;
  console.log("template config", config);

  const renderHeader = () => {
    const { basicInfo, customBasicInfo = [] } = config;
    const { realName, mobile, jobTitle, birthDate, location, email } = basicInfo || {};
    return (
      <header className="flex flex-col justify-center items-center">
        <div className="flex items-center">
          <span className="text-3xl font-semibold mb-2 mr-2">{realName}</span>
          <span className="text-xl mb-2">{jobTitle}</span>
        </div>
        <div className="mt-2 flex items-center">
          {location && (
            <span className="flex items-center">
              <MapPin size={16} className="mr-1" />
              {location}
            </span>
          )}

          {email && (
            <span className="ml-3 flex items-center">
              <a href={`mailto:${email}`} className="flex items-center text-blue-500">
                <Mail size={16} className="mr-1" />
                {email}
              </a>
            </span>
          )}

          {mobile && (
            <span className="ml-3 flex items-center">
              <Phone size={16} className="mr-1" />
              {mobile}
            </span>
          )}

          {birthDate && (
            <span className="ml-3 flex items-center">
              <Cake size={16} className="mr-1" />
              {birthDate}
            </span>
          )}
        </div>
        <div className="mt-2 flex items-center">
          {customBasicInfo.map((item) => {
            return (
              <a
                key={item.id}
                target="_blank"
                href={item.value}
                className="ml-3 flex items-center text-blue-500"
              >
                <Link size={16} className="mr-1" />
                {item.key}
              </a>
            );
          })}
        </div>
      </header>
    );
  };

  const renderSectionContent = () => {
    const { blocks = [] } = config;
    return blocks.map((block) => {
      const { id, type, config: blockConfig } = block;
      const { title } = blockConfig;
      return (
        <div className="content-block mt-7" key={id}>
          <header>
            <h2 className="text-xl font-semibold mb-2 border-l-4 pl-3 py-1">{title}</h2>
          </header>
          {type === "complex" ? renderComplexBlock(blockConfig) : renderSimpleBlock(blockConfig)}
        </div>
      );
    });
  };

  const renderSimpleBlock = (blockConfig: BlockProps) => {
    return <div className="py-2" dangerouslySetInnerHTML={{ __html: blockConfig?.content }}></div>;
  };

  const renderComplexBlock = (blockConfig: BlockProps) => {
    const { items } = blockConfig;
    return (
      <div className="py-2">
        {items?.map((item) => {
          const { id, title, subTitle, city, content, timeArea } = item;
          return (
            <div className="item mb-4" key={id}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-lg font-semibold">{`${title} - ${subTitle}`}</span>
                  {city && (
                    <span className="flex items-center ml-3">
                      <MapPin size={16} className="mr-1" />
                      {city}
                    </span>
                  )}
                </div>
                {timeArea && timeArea.from && timeArea.to && (
                  <div className="md:text-right text-gray-500 tracking-wider">{`${dayjs(
                    timeArea.from
                  ).format("YYYY/MM")} - ${dayjs(timeArea.to).format("YYYY/MM")}`}</div>
                )}
              </div>
              {content && (
                <div className="item-content" dangerouslySetInnerHTML={{ __html: content }} />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-8 max-w-screen-lg bg-white m-auto" id="default-template">
      {renderHeader()}
      <section>
        {renderSectionContent()}
        {/* <div className="content-block mt-7">
          <header>
            <h2 className="text-xl font-semibold mb-2 border-l-4 pl-3 py-1">自我介绍</h2>
          </header>
          <div className="py-2">
            <p>资深前端开发工程师，8年工作经验，2年团队管理经验。</p>
            <p>
              擅长前端架构设计、性能优化及复杂交互实现，精通React/Vue框架，具备出色的团队协作与项目管理能力。
            </p>
          </div>
        </div>

        <div className="content-block mt-7">
          <header>
            <h2 className="text-xl font-semibold mb-2 border-l-4 pl-3 py-1">工作经历</h2>
          </header>
          <div className="py-2">
            <div className="item mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-lg font-semibold">跨越速运 - 前端小组负责人深圳</span>
                  <span className="flex items-center ml-3">
                    <MapPin size={16} className="mr-1" />
                    深圳
                  </span>
                </div>
                <div className="md:text-right text-gray-500">2023/06 - 2024/04</div>
              </div>
              <div className="item-content">
                <ul>
                  <li>作为前端小组负责人，负责智能体平台的架构设计、开发与团队管理。</li>
                  <li>负责团队公共类库设计，代码Review等。</li>
                  <li>优化C端首页场景性能，提高页面加载速度30%。</li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-lg font-semibold">跨越速运 - 前端小组负责人深圳</span>
                  <span className="flex items-center ml-3">
                    <MapPin size={16} className="mr-1" />
                    深圳
                  </span>
                </div>
                <div className="md:text-right text-gray-500">2023/06 - 2024/04</div>
              </div>
              <div className="item-content">
                <ul>
                  <li>作为前端小组负责人，负责智能体平台的架构设计、开发与团队管理。</li>
                  <li>负责团队公共类库设计，代码Review等。</li>
                  <li>优化C端首页场景性能，提高页面加载速度30%。</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
