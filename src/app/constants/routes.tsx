import HomePage from "../pages/Homepage";
import HtmlCssPage from "../pages/HtmlCssPage";
import { Lang } from "../types";


// setPage is only needed by HomePage
export function getPageMap(
  lang: Lang,
  setPage: (id: string) => void,
): Record<string, JSX.Element> {
  return {
    home: <HomePage lang={lang} setPage={setPage} />,
    roadmap: <RoadmapPage lang={lang} />,
    html: <HtmlCssPage lang={lang} />,
    js: <JavaScriptPage lang={lang} />,
    react: <ReactPage lang={lang} />,
    nextjs: <NextJsPage lang={lang} />,
    typescript: <TypeScriptPage lang={lang} />,
    websocket: <WebSocketPage lang={lang} />,
    gsap: <GsapPage lang={lang} />,
    performance: <PerformancePage lang={lang} />,
    testing: <TestingPage lang={lang} />,
    systemdesign: <SystemDesignPage lang={lang} />,
    security: <SecurityPage lang={lang} />,
    devops: <DevOpsPage lang={lang} />,
    interview: <InterviewPage lang={lang} />,
  };
}
