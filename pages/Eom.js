
function Eom ( { employee } ) {
    //console.log(employee)
    return (
        <div className="eom">
            <h1>Employee of the Month</h1>
            <div>
                <h2>
                    Kate Williams 
                </h2>
                <h5>
                    CEO & CFO
                </h5>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/01/31/891804-kane-williamson.jpg" alt="employee image" />
                <p>Dev Guy who does nothing but kicks everybody's Ass.</p>
            </div>
            <style jsx>
                {`
                .eom {
                    display: grid;
                    height: 100vh;
                    text-align: center;
                    justify-content: center;
                }
                .eom img {
                    width: 250px;
                    border-radius: 4.5em;
                    object-fit: contain;
                }
            `}
            </style>

        </div>
    )
};

export const getServerSideProps = async pageContent => {
    const apiResponse = await fetch( 'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth' );

    const employee = await apiResponse.json();

    return {
        props: {
            employee: employee
        }
    }
};

export default Eom;
