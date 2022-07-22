import Layout from '../components/Layout'



export default function home() {
    return (
        <Layout>
            {/* Experiences */}
            <section className='justify-center items-center'>
                <h2>
                    RUPERTA
                </h2>
                <img 
                    src="https://rb.gy/wxrz8v"
                    alt=""
                    width={500}
                    height={500}
                    className="justify-center items-center mx-auto"
                />
            </section>
        </Layout>
    );
};