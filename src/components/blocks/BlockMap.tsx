export default function BlockMap() {
    return (
        <div className="block-map block">
            <div className="block-map__body">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.723799607955!2d-56.120434184763376!3d-34.86316678039317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80b54a333ed3%3A0x2f9cc03c2c8c9b1!2sDr.%20Pantale%C3%B3n%20P%C3%A9rez%204881%2C%2012100%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1sen!2suy!4v1640790050577!5m2!1sen!2suy"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                />
            </div>
        </div>
    );
}
