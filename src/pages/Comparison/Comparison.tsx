import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const Comparison = () => {
    const { t } = useTranslation("comparison");
  return (
    <section>
        <div className="container">
            <p className="text-4xl font-semibold mt-8 max-[724px]:text-3xl max-[570px]:text-2xl">{t("title")}</p>
            <div className="flex items-center gap-4 flex-col min-h-120 mt-4">
                <div>
                    <img src="https://olcha.uz/_nuxt/empty-icon.DX6S2-bK.png" alt="" />
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-2xl font-semibold max-[824px]:text-center">{t("empty_one")}</p>
                    <p className="font-normal max-[824px]:text-center">{t("empty_two")}</p>
                </div>
                <div className="mt-10">
                    <Link to="/" className="py-3 px-6 bg-red-700 text-white rounded-xl border-2 border-red-700 transition-colors duration-300 hover:bg-white hover:text-red-700">{t("button")}</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Comparison