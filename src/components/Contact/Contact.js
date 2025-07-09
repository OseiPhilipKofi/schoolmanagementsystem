const Contact = () => {
    return (
        <>
            <div class="contact-wrap mt-2 p-3 pt-5">
                <div class="contact-form">
                    <span class="category pointer cactive" data-cpage = 'chat'>
                        <span> <i class="fa fa-message"></i></span>
                        <span> Chat </span>
                    </span>
                    <span class="category pointer" data-cpage = 'acall'>
                        <span> <i class="fa fa-phone"></i></span>
                        <span> Voice Call </span>
                    </span>
                    <span class="category pointer" data-cpage = 'vcall'>
                        <span> <i class="fa fa-video"></i></span>
                        <span> Video Call </span>
                    </span>
                </div>
                <div class="contact-body">
                    <div class="Cform" data-cpage = 'chat'>
                        <span class="title">chat</span>
                        <span></span>
                    </div>
                    <div class="Cform" data-cpage = 'voice'>
                        <span class="title">Call</span>
                        <span></span>
                    </div>
                    <div class="Cform" data-cpage = 'video'>
                        <span class="title">send Note</span>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Contact;