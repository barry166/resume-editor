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
    const { realName, mobile, jobTitle, birthDate, location, email } =
      basicInfo || {};
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
              <a
                href={`mailto:${email}`}
                className="flex items-center text-blue-500"
              >
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

  const renderBlockByType = (
    type: "simple" | "complex" | "tag",
    blockConfig: BlockProps,
  ) => {
    switch (type) {
      case "simple":
        return renderSimpleBlock(blockConfig);
      case "complex":
        return renderComplexBlock(blockConfig);
      case "tag":
        return renderTagBlock(blockConfig);
      default:
        return null;
    }
  };

  const renderSectionContent = () => {
    const { blocks = [] } = config;
    return blocks.map((block) => {
      const { id, type, config: blockConfig, style } = block;
      const { title } = blockConfig;
      return (
        <div className="content-block mt-7" key={id} style={style}>
          <header>
            <h2 className="text-xl font-semibold mb-2 border-l-4 pl-3 py-1">
              {title}
            </h2>
          </header>
          {renderBlockByType(type, blockConfig)}
        </div>
      );
    });
  };

  const renderSimpleBlock = (blockConfig: BlockProps) => {
    return (
      <div className="ql-snow w-full ">
        <div
          className="ql-editor mx-[-12px] my[-15px]"
          dangerouslySetInnerHTML={{ __html: blockConfig?.content }}
        />
      </div>
    );
  };

  const renderTagBlock = (blockConfig: BlockProps) => {
    const { items = [] } = blockConfig;

    return (
      <div className="mt-4 flex gap-2 flex-wrap">
        {items?.map((item) => (
          <div
            key={item.id}
            className="border border-blue-500 px-2 py-1 text-blue-500"
          >
            {item.content}
          </div>
        ))}
      </div>
    );
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
                  <span className="text-lg font-semibold">{`${title}  ${subTitle ? "-" + subTitle : ""}`}</span>
                  {city && (
                    <span className="flex items-center ml-3">
                      <MapPin size={16} className="mr-1" />
                      {city}
                    </span>
                  )}
                </div>
                {timeArea && timeArea.from && timeArea.to && (
                  <div className="md:text-right text-gray-500 tracking-wider">{`${dayjs(
                    timeArea.from,
                  ).format(
                    "YYYY/MM",
                  )} - ${dayjs(timeArea.to).format("YYYY/MM")}`}</div>
                )}
              </div>
              {content && (
                <div className="ql-snow w-full ">
                  <div
                    className="ql-editor mx-[-12px] my[-15px]"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="p-8 max-w-screen-lg bg-white m-auto page"
      id="default-template"
    >
      {renderHeader()}
      <section>{renderSectionContent()}</section>
    </div>
  );
}
