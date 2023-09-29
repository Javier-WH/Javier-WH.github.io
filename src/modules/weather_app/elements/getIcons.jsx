

export default function GetIcon({ code }) {
    if(code === "placeHolder"){
        return
    }

    switch (code) {
        case "a01d":
        case "a02d":
        case "a03d":
        case "a04d":
        case "a05d":
            return <A01d />
        case "a01n":
        case "a02n":
        case "a03n":
        case "a04n":
        case "a05n":
            return <A01n />
        case "c01d":
            return <C01d />
        case "c01n":
            return <C01n />
        case "c02d":
            return <C02d />
        case "c02n":
            return <C02n />
        case "c03d":
            return <C03d />
        case "c03n":
            return <C03n />
        case "c04d":
        case "c04n":
            return <C04d />
        case "d01d":
        case "d02d":
        case "d03d":
        case "d01n":
        case "d02n":
        case "d03n":
            return <D01d />
        case "f01d":
        case "f01n":
            return <F01d />
        case "r01d":
        case "r01n":
            return <R01d />
        case "r02d":
        case "r02n":
            return <R02d />
        case "r03d":
        case "r03n":
            return <R03d />
        case "r04d":
        case "r04n":
        case "r05d":
        case "r05n":
            return <R04d />
        case "r06d":
        case "r06n":
            return <R06d />
        case "s01d":
        case "s01n":
            return <S01d />
        case "s02d":
        case "s02n":
            return <S02d />
        case "s03d":
        case "s03n":
            return <S03d />
        case "s04d":
        case "s04n":
            return <S04d />
        case "t01d":
        case "t02d":
        case "t03d":
        case "t04d":
        case "t05d":
        case "t01n":
        case "t02n":
        case "t03n":
        case "t04n":
        case "t05n":
            return <T01d />
        default:
            return <U00d />
    }





}

//a01d, a02d, a03d, a04d, a05d, a06d
function A01d() {
    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

        </defs>
        <g filter="url(#blur)" id="cloudy-day-3">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
    </svg>;

}

//a01n, a02n, a03n, a04n, a05n, a06n
function A01n() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

        </defs>
        <g filter="url(#blur)" id="cloudy-night-3">
            <g transform="translate(20,10)">
                <g transform="translate(16,4), scale(0.8)">
                    <g className="am-weather-moon-star-1">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" />
                    </g>
                    <g className="am-weather-moon-star-2">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" transform="translate(20,10)" />
                    </g>
                    <g className="am-weather-moon">
                        <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
    </svg>

}

function C01d() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

        </defs>
        <g filter="url(#blur)" id="day">
            <g transform="translate(32,32)">
                <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
                    <g>
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
            </g>
        </g>
    </svg>

}

function C01n() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="night">
            <g transform="translate(20,20)">
                <g className="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" />
                </g>
                <g className="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" transform="translate(20,10)" />
                </g>
                <g className="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeLinejoin="round" strokeWidth="2" />
                </g>
            </g>
        </g>
    </svg>
}

function C02d() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="cloudy-day-1">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
    </svg>
}

function C02n() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="cloudy-night-1">
            <g transform="translate(20,10)">
                <g transform="translate(16,4), scale(0.8)">
                    <g className="am-weather-moon-star-1">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" />
                    </g>
                    <g className="am-weather-moon-star-2">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" transform="translate(20,10)" />
                    </g>
                    <g className="am-weather-moon">
                        <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
    </svg>
}

function C03d() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

        </defs>
        <g filter="url(#blur)" id="cloudy-day-2">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>

    </svg>
}

function C03n() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="cloudy-night-2">
            <g transform="translate(20,10)">
                <g transform="translate(16,4), scale(0.8)">
                    <g className="am-weather-moon-star-1">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" />
                    </g>
                    <g className="am-weather-moon-star-2">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" transform="translate(20,10)" />
                    </g>
                    <g className="am-weather-moon">
                        <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
    </svg>
}
//c04d, c04n
function C04d() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

        </defs>
        <g filter="url(#blur)" id="cloudy">
            <g transform="translate(20,10)">
                <g className="am-weather-cloud-1">
                    <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-10,-8), scale(0.6)" />
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
    </svg>
}
//d01d, d01n, d02d, d02n, d03d, d03n
function D01d() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="snowy-6">
            <g transform="translate(20,10)">
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
                <g className="am-weather-snow-1">
                    <g transform="translate(3,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
                <g className="am-weather-snow-2">
                    <g transform="translate(11,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
                <g className="am-weather-snow-3">
                    <g transform="translate(20,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
}
//f01d, f01n
function F01d() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

        </defs>
        <g filter="url(#blur)" id="rainy-7">
            <g transform="translate(20,10)">
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(31,46), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(-5,1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(5,0)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
    </svg>


}
//r01d, r01n
function R01d() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="rainy-4">
            <g transform="translate(20,10)">
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(37,45), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
    </svg>

}
//r02d, r02n
function R02d() {

    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

        </defs>
        <g filter="url(#blur)" id="rainy-5">
            <g transform="translate(20,10)">
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(34,46), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
    </svg>
}
//r03d, r03n
function R03d() {
    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="rainy-6">
            <g transform="translate(20,10)">
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(31,46), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,4" strokeLinecap="round" strokeWidth="2" transform="translate(-4,1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,4" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,4" strokeLinecap="round" strokeWidth="2" transform="translate(4,0)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
    </svg>
}
//r04d, r04n, r05d, r05n
function R04d() {
    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

        </defs>
        <g filter="url(#blur)" id="rainy-2">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(37,45), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
    </svg>
}
//r06d, r06n
function R06d() {
    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="rainy-1">
            <g transform="translate(20,10)">
                <g transform="translate(0,16), scale(1.2)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.5" transform="translate(-15,-5), scale(0.85)" />
                </g>
            </g>
            <g transform="translate(34,46), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
    </svg>
}

//s01d, s01n
function S01d() {
    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="snowy-2">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g className="am-weather-snow-1">
                <g transform="translate(32,38)">
                    <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </svg>
}

//s02d, s02n
function S02d() {
    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="snowy-1">
            <g transform="translate(20,10)">
                <g transform="translate(0,16), scale(1.2)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.5" transform="translate(-15,-5), scale(0.85)" />
                </g>
            </g>
            <g transform="translate(20,9)">
                <g className="am-weather-snow-1">
                    <g transform="translate(7,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
                <g className="am-weather-snow-2">
                    <g transform="translate(16,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
}

//s03d, s03n
function S03d() {
    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

        </defs>
        <g filter="url(#blur)" id="snowy-5">
            <g transform="translate(20,10)">
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
                <g className="am-weather-snow-1">
                    <g transform="translate(7,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
                <g className="am-weather-snow-2">
                    <g transform="translate(16,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
}

//s04d, s04n
function S04d() {
    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="snowy-3">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
                <g className="am-weather-snow-1">
                    <g transform="translate(7,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
                <g className="am-weather-snow-2">
                    <g transform="translate(16,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
}

//t01d, t02d, t03d, t04d, t05d, t01n, t02n, t03n, t04n, t05n
function T01d() {
    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="thunder">
            <g transform="translate(20,10)">
                <g className="am-weather-cloud-1">
                    <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-10,-6), scale(0.6)" />
                </g>
                <g>
                    <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
                <g transform="translate(-9,28), scale(1.2)">
                    <polygon className="am-weather-stroke" fill="orange" stroke="white" strokeWidth="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" />
                </g>
            </g>
        </g>
    </svg>
}

//u00d, u00n
function U00d() {
    return <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="weather-icon"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
        </defs>
        <g id="thunder">
            <g transform="translate(20,10)">
                <g className="am-weather-cloud-1">
                    <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-10,-6), scale(0.6)" />
                </g>
                <g>
                    <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
                <g transform="translate(-9,28), scale(1.2)">
                    <polygon className="am-weather-stroke" fill="orange" stroke="white" strokeWidth="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" />
                </g>
            </g>
        </g>
        <g id="day">
            <g transform="translate(32,32)">
                <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
                    <g>
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
            </g>
        </g>
        <g id="night">
            <g transform="translate(20,20)">
                <g className="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" />
                </g>
                <g className="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" transform="translate(20,10)" />
                </g>
                <g className="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeLinejoin="round" strokeWidth="2" />
                </g>
            </g>
        </g>
        <g id="cloudy-day-1">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
        <g id="cloudy-night-1">
            <g transform="translate(20,10)">
                <g transform="translate(16,4), scale(0.8)">
                    <g className="am-weather-moon-star-1">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" />
                    </g>
                    <g className="am-weather-moon-star-2">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" transform="translate(20,10)" />
                    </g>
                    <g className="am-weather-moon">
                        <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
        <g id="cloudy-day-2">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
        <g id="cloudy-night-2">
            <g transform="translate(20,10)">
                <g transform="translate(16,4), scale(0.8)">
                    <g className="am-weather-moon-star-1">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" />
                    </g>
                    <g className="am-weather-moon-star-2">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" transform="translate(20,10)" />
                    </g>
                    <g className="am-weather-moon">
                        <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
        <g id="cloudy-day-3">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
        <g id="cloudy-night-3">
            <g transform="translate(20,10)">
                <g transform="translate(16,4), scale(0.8)">
                    <g className="am-weather-moon-star-1">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" />
                    </g>
                    <g className="am-weather-moon-star-2">
                        <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" strokeMiterlimit="10" transform="translate(20,10)" />
                    </g>
                    <g className="am-weather-moon">
                        <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
        <g id="cloudy">
            <g transform="translate(20,10)">
                <g className="am-weather-cloud-1">
                    <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-10,-8), scale(0.6)" />
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
        </g>
        <g id="rainy-1">
            <g transform="translate(20,10)">
                <g transform="translate(0,16), scale(1.2)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.5" transform="translate(-15,-5), scale(0.85)" />
                </g>
            </g>
            <g transform="translate(34,46), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
        <g id="rainy-2">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(37,45), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
        <g id="rainy-3">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fifll="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(34,46), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
        <g id="rainy-4">
            <g transform="translate(20,10)">
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(37,45), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
        <g id="rainy-5">
            <g transform="translate(20,10)">
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(34,46), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
        <g id="rainy-6">
            <g transform="translate(20,10)">
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(31,46), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,4" strokeLinecap="round" strokeWidth="2" transform="translate(-4,1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,4" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,4" strokeLinecap="round" strokeWidth="2" transform="translate(4,0)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
        <g id="rainy-7">
            <g transform="translate(20,10)">
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g transform="translate(31,46), rotate(10)">
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(-5,1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
                <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(5,0)" x1="0" x2="0" y1="0" y2="8" />
            </g>
        </g>
        <g id="snowy-1">
            <g transform="translate(20,10)">
                <g transform="translate(0,16), scale(1.2)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.5" transform="translate(-15,-5), scale(0.85)" />
                </g>
            </g>
            <g transform="translate(20,9)">
                <g className="am-weather-snow-1">
                    <g transform="translate(7,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
                <g className="am-weather-snow-2">
                    <g transform="translate(16,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
            </g>
        </g>
        <g id="snowy-2">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
            </g>
            <g className="am-weather-snow-1">
                <g transform="translate(32,38)">
                    <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
        <g id="snowy-3">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
                <g className="am-weather-snow-1">
                    <g transform="translate(7,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
                <g className="am-weather-snow-2">
                    <g transform="translate(16,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
            </g>
        </g>
        <g id="snowy-4">
            <g transform="translate(20,10)">
                <g>
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
                <g className="am-weather-snow-1">
                    <g transform="translate(11,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
            </g>
        </g>
        <g id="snowy-5">
            <g transform="translate(20,10)">
                <g className="snowy-6-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
                <g className="am-weather-snow-1">
                    <g transform="translate(7,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
                <g className="am-weather-snow-2">
                    <g transform="translate(16,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
            </g>
        </g>
        <g id="snowy-6">
            <g transform="translate(20,10)">
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                </g>
                <g className="am-weather-snow-1">
                    <g transform="translate(3,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
                <g className="am-weather-snow-2">
                    <g transform="translate(11,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
                <g className="am-weather-snow-3">
                    <g transform="translate(20,28)">
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                        <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
}