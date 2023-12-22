import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>構建中</title>
        <meta name="description" content="構建中" />
      </Head>

      <div>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">網站構建</h1>
                <p>網站正在構建中</p>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">何時完工？</h1>
                <p>將在明年2024年6月前完成</p>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">如何聯繫？</h1>
                <p>使用support@ssangyongsports.eu.org</p>

                <p>感謝🙏你的等待</p>
              </header>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
