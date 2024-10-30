import Text from '../Text';

export default function NonProfitDisclaimers({nonProfitSection}) {
    return (
        <>
        <div className="align-center mt-10 flex w-full flex-col gap-7 text-white lg:hidden">
            <div className="align-center m-auto max-w-4xl text-center text-[25px]">
              <Text Text={nonProfitSection.title} Style="" TextClassProps="" />
            </div>
            <div className="align-center m-auto mx-12 mt-4 max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textOne}
                Style="normal"
              />
            </div>
            <div className="align-center m-auto mx-12 mt-4 max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textTwo}
                Style="normal"
              />
            </div>
          </div>
          <div className="align-center mt-10 hidden w-full flex-col gap-7 text-white lg:flex">
            <div className="align-center m-auto max-w-4xl text-center font-semibold">
              <Text
                Text={nonProfitSection.title}
                Style="small"
                TextClassProps=""
              />
            </div>
            <div className="align-center m-auto max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textOne}
                Style="normalCardHome"
              />
            </div>
            <div className="align-center m-auto max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textTwo}
                Style="normalCardHome"
              />
            </div>
          </div>
        </>

    )
}