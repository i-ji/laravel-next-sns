import Header from "../../components/HeaderMenu/Header";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Loading() {
  return (
    <>
      <Header />
      <main className="mt-24 max-w-[638px] mx-auto">
        <main className="mt-24 max-w-[638px] mx-auto">
          <Card className="mb-2 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <Skeleton className="w-[32px] h-[32px] rounded-full" />
                <Skeleton className=" w-11/12 h-[32px] rounded-full" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className=" w-full h-[24px] rounded-full mb-3 mt-1" />
              <Skeleton className=" w-full h-[24px] rounded-full mb-3" />
              <Skeleton className=" w-2/5 h-[24px] rounded-full" />
            </CardContent>
          </Card>
          <Card className="mb-2 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <Skeleton className="w-[32px] h-[32px] rounded-full" />
                <Skeleton className=" w-11/12 h-[32px] rounded-full" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className=" w-full h-[24px] rounded-full mb-3 mt-1" />
              <Skeleton className=" w-full h-[24px] rounded-full mb-3" />
              <Skeleton className=" w-2/5 h-[24px] rounded-full" />
            </CardContent>
          </Card>
          <Card className="mb-2 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <Skeleton className="w-[32px] h-[32px] rounded-full" />
                <Skeleton className=" w-11/12 h-[32px] rounded-full" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className=" w-full h-[24px] rounded-full mb-3 mt-1" />
              <Skeleton className=" w-full h-[24px] rounded-full mb-3" />
              <Skeleton className=" w-2/5 h-[24px] rounded-full" />
            </CardContent>
          </Card>
          <Card className="mb-2 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <Skeleton className="w-[32px] h-[32px] rounded-full" />
                <Skeleton className=" w-11/12 h-[32px] rounded-full" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className=" w-full h-[24px] rounded-full mb-3 mt-1" />
              <Skeleton className=" w-full h-[24px] rounded-full mb-3" />
              <Skeleton className=" w-2/5 h-[24px] rounded-full" />
            </CardContent>
          </Card>
        </main>
      </main>
    </>
  );
}
