import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ServiceDetail from "@/components/ServiceDetail";
import { brand, liveProjects, site } from "@/data/projects";

// 빌드 때 만든 slug 밖의 주소는 404
export const dynamicParams = false;

export function generateStaticParams() {
  return liveProjects.filter((project) => project.detail).map((project) => ({ slug: project.slug }));
}

function findProject(slug: string) {
  return liveProjects.find((project) => project.slug === slug && project.detail);
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) return {};

  const title = `${project.name} · 박준형`;
  const path = `/services/${slug}`;

  return {
    title,
    description: project.description,
    // layout의 canonical("/")을 덮어써서 메인의 중복 페이지로 취급되지 않게 한다
    alternates: { canonical: path },
    // openGraph는 얕게 병합되므로 필드를 모두 다시 적는다
    openGraph: {
      type: "website",
      siteName: brand,
      locale: site.locale,
      url: path,
      title,
      description: project.description,
    },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <ServiceDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
