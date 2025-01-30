type jumbotronProps = {
  title: string;
  subtitle: string;
  labelLink: string;
  link: string;
};

const Jumbotron = ({ link, subtitle, labelLink, title }: jumbotronProps) => {
  return (
    <section className="rounded-md border-2 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div className="flex flex-col justify-center">
          <h1 className="text-lg mb-4 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{subtitle}</p>
          <a href={link} className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
            {labelLink}
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
