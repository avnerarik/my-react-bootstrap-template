
const Interview = () => {

    /*****
    PROBLEM:
    Numbers from 1-100
    where if number divisible by 2 then show foo
    where if number divisible by 3 then show baz
    where if number divisible by 2 and divisible by 3 then show fooBaz
    where other then show number
    *****/
    
    const dividerByTwo = 2;
    const dividerByThree = 3;
    const isDivisible = false;
    
    const showMessageByDivider = ( number ) => {

        if(number % dividerByTwo == 0 && number % dividerByThree == 0) {
            console.log(number + " is FooBaz");
        } else if(number % dividerByTwo == 0) {
            console.log(number + " is Foo");
        } else if(number % dividerByThree == 0) {
            console.log(number + " is Baz")
        } else {
            console.log(number + "is not divisible");
        }
    }

    const handleOnClickDivisibleNumber = (limit) => {
        for(let i = 0; i <= limit; i++){
            showMessageByDivider(i);
        }
    }

    return ( 
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    {/*<!-- Portfolio Modal - Title-->*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Interview Question</h2>
                    {/*<!-- Icon Divider-->*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    {/*<!-- Portfolio Modal - Image-->*/}
                    {/*<img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />*/}
                    {/*<!-- Portfolio Modal - Text-->*/}
                    <p className="mb-4 text-left">PROBLEM:
                        <li>Numbers from 1-100</li>
                        <li>where if number divisible by 2 then show foo</li>
                        <li>where if number divisible by 3 then show baz</li>
                        <li>where if number divisible by 2 and divisible by 3 then show fooBaz</li>
                        <li>where other then show number</li>
                    </p>
                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={ ()=> numbersDivisibleByParameter(10)}>
                        <i className="fas fa-xmark fa-fw"></i>
                        Close Window
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Interview;