import LayoutSpa from '../components/LayoutSpa'



export default function homeSpa() {
    return (
        <LayoutSpa>
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
        </LayoutSpa>
    );
};