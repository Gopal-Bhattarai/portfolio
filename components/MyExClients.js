const MyExClients = ({ candidate }) => {
  return (
    <div className="bg-grey-50" id="exclients">
      <div className="container py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            My Past clients
          </h2>
          <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
            {candidate.clients && Object.entries(candidate.clients).map(([key, record], index) => (
              <div key={index}>
                {record.current == "0" ? (
                  <>
                    <span className="mx-8 mt-8 block">
                      <img
                        src={`/candidate/clients/${record.logo}`}
                        alt="client logo"
                        className="mx-auto block h-12 w-auto"
                      />
                    </span>
                    {/* <span className="flex justify-center">{record.name}</span> */}
                  </>
                ) : (
                  void 0
                )}
              </div>
            ))}

            {/* <div className="mt-8">
          <span className="mx-8 block">
            <img
              src="/assets/img/nato.png"
              alt="client logo"
              className="mx-auto block h-12 w-auto"
            />
          </span>
          <span className="mx-8 flex justify-center"> Afghanistan</span>
        </div>
  
        <div className="mt-8">
          <span className="mx-8 block">
            <img
              src="/assets/img/unlogo.png"
              alt="client logo"
              className="mx-auto block h-12 w-auto"
            />
          </span>
          <span className="mx-8 flex justify-center"> Mali</span>
        </div>
  
        <div className="mt-8">
          <span className="mx-8 block">
            <img
              src="/assets/img/shell.png"
              alt="client logo"
              className="mx-auto block h-12 w-auto"
            />
          </span>
          <span className="mx-8 flex justify-center">Shell, Iraq</span>
        </div>

        <div className="mt-8">
          <span className="mx-8 block">
            <img
              src="/assets/img/bp.png"
              alt="client logo"
              className="mx-auto block h-12 w-auto"
            />
          </span>
          <span className="mx-8 flex justify-center">BP, Iraq</span>
        </div>

        <div className="mt-8">
          <span className="mx-8 block">
            <img
              src="/assets/img/chiyoda.png"
              alt="client logo"
              className="mx-auto block h-12 w-auto"
            />
          </span>
          <span className="mx-8 flex justify-center">Iraq</span>
        </div>

        <div className="mt-8">
        <span className="mx-8 block">
          <img
            src="/assets/img/vizocomlogo.png"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
          />
        </span>
        <span className="mx-8 flex justify-center">Afghanistan</span>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExClients;
