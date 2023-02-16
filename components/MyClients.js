const MyClients = ({ candidate }) => {
  return (
    <div className="bg-grey-50" id="clients">
      <div className="container py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            My latest clients
          </h2>
          <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
            {candidate.clients && Object.entries(candidate.clients).map(([key, record], index) => (
              <div key={index}>
                {record.current !== "0" ? (
                  <span className="m-8 block">
                    <img
                      src={`/candidate/clients/${record.logo}`}
                      alt="client logo"
                      className="mx-auto block h-12 w-auto"
                    />
                    {/* {record.url} */}
                  </span>
                ) : (
                  void 0
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClients;
