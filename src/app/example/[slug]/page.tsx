import { InferPagePropsType } from "next-typesafe-url";
import { withParamValidation } from "next-typesafe-url/app/hoc";
import { Route, RouteType } from "./routeType";

type PageProps = InferPagePropsType<RouteType>;

export default withParamValidation(DynamicPageWithRouteParams, Route);

function DynamicPageWithRouteParams({ routeParams }: PageProps) {
  return (
    <div className="w-full py-4">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Dynamic Page (with searchParams)
        </h1>

        <p className="">
          This page is dynamically generated with the following routeParams:{" "}
          {JSON.stringify(routeParams)}
        </p>
      </div>
    </div>
  );
}
