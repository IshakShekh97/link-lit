import DashboardPageForm from "@/components/dashboard/form/dashboardPageForm";
import PageSectionButtons from "@/components/dashboard/PageSectionButtons";

const DashBoardPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <DashboardPageForm />
      <div className="bg-foreground w-full my-10 border-2 border-dashed max-w-screen-lg max-2xl:mx-auto " />
      <PageSectionButtons />
    </div>
  );
};

export default DashBoardPage;
