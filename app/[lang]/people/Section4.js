import { basePath } from '@/next.config.mjs';
import { Amil } from '@/public/images/people';
import ExportedImage from 'next-image-export-optimizer';
import TitleText from '../components/TitleText';
import Button from './Button';

export default function Section4({
  ContainerTitleProps,
  ContainerTextProps,
  alt,
  TitleSize1,
  TitleSize2,
  TitleLabel1,
  TitleLabel2,
  TextLabel,
  labelButton,
  buttonRoute,
}) {
  return (
    <div className="mx-[5vw] mb-[40px] mt-[100px] flex flex-col space-y-4 text-center">
      <div className="mb-8 flex w-full justify-center lg:hidden">
        <ExportedImage src={Amil} alt={alt} priority basePath={basePath} />
      </div>
      <div className="flex w-full flex-col items-center gap-5 text-center lg:hidden">
        <TitleText
          TitleSize={TitleSize1}
          TitleLabel={TitleLabel1}
          TextSize={''}
          TextLabel={''}
          ContainerTitleProps={{
            style: {
              background:
                'linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)',
            },
          }}
          ContainerTextProps={{}}
          TitleClassProps={
            'bg-transparent bg-clip-text text-transparent bg-gradient-to-b from-[#38B76B] via-[#33A5AE] to-[#3578DE]'
          }
          TextClassProps={''}
        />
        <TitleText
          TitleSize={TitleSize2}
          TitleLabel={TitleLabel2}
          TextSize="normal"
          TextLabel={TextLabel}
          ContainerTitleProps={ContainerTitleProps}
          ContainerTextProps={ContainerTextProps}
          TitleClassProps={'text-white'}
          TextClassProps={'text-white'}
        />
        <Button
          size="medium"
          type="primary"
          path={buttonRoute}
          label={labelButton}
          style={{}}
          radius="50px"
          gradientBackground="linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)"
          width="250px"
          height="65px"
        />
      </div>

      <div className="mt-[80px] hidden flex-1 items-center lg:flex">
        <div className="flex w-1/2 items-center justify-start">
          <ExportedImage src={Amil} alt={alt} priority basePath={basePath} />
        </div>
        <div className="flex w-1/2 items-center justify-start sm:justify-center">
          <div className="flex w-full flex-col gap-5 text-left">
            <TitleText
              TitleSize={TitleSize1}
              TitleLabel={TitleLabel1}
              TextSize={''}
              TextLabel={''}
              ContainerTitleProps={{
                style: {
                  background:
                    'linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)',
                },
              }}
              ContainerTextProps={{}}
              TitleClassProps={
                'bg-transparent bg-clip-text text-transparent bg-gradient-to-b from-[#38B76B] via-[#33A5AE] to-[#3578DE]'
              }
              TextClassProps={''}
            />
            <TitleText
              TitleSize={TitleSize2}
              TitleLabel={TitleLabel2}
              TextSize="normal"
              TextLabel={TextLabel}
              ContainerTitleProps={ContainerTitleProps}
              ContainerTextProps={ContainerTextProps}
              TitleClassProps={'text-white'}
              TextClassProps={'text-white'}
            />
            <div className="hidden flex-col justify-center sm:flex">
              <Button
                size="medium"
                type="primary"
                path={buttonRoute}
                label={labelButton}
                style={{}}
                radius="50px"
                gradientBackground="linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)"
                width="250px"
                height="65px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
