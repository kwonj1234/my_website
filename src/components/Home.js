import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="Home">
            <Link><button>About Jae</button></Link>
            <Link><button>Projects</button></Link>
            <Link><button>Employment History</button></Link>
            <Link><button>Hobbies</button></Link>
            <Link><button>Contact Me</button></Link>
        </div>
    )
}
