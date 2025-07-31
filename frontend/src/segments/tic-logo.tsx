const patterns = [
    {id: 'basicBox1', w: '0.5', h1: '0.02', h2: '0.035', f1: '#fff', f2: '#443380'},
    {id: 'basicBox2', w: '0.8', h1: '0.028', h2: '0.038', f1: '#fff', f2: '#443380'},
    {id: 'basicBox3', w: '1.1', h1: '0.034', h2: '0.038', f1: '#fff', f2: '#443380'},
    {id: 'basicBox4', w: '1.3', h1: '0.04', h2: '0.038', f1: '#fff', f2: '#443380'},
    {id: 'basicBox9', w: '0.3', h1: '0.02', h2: '0.035', f1: '#443380', f2: '#fff'},
    {id: 'basicBox8', w: '0.5', h1: '0.02', h2: '0.035', f1: '#443380', f2: '#fff'},
    {id: 'basicBox7', w: '0.8', h1: '0.028', h2: '0.038', f1: '#443380', f2: '#fff'},
    {id: 'basicBox6', w: '1.1', h1: '0.034', h2: '0.038', f1: '#443380', f2: '#fff'},
    {id: 'basicBox5', w: '1.3', h1: '0.04', h2: '0.038', f1: '#443380', f2: '#fff'},
]

const Logo = () => {
    const defs = []
    for (const [index, value] of patterns.entries()) {
        defs.push(
            <pattern key={index} id={value.id} width="100" height="7.1%" patternContentUnits="objectBoundingBox">
                <rect x=".15" y="0" width={value.w} height={value.h1} fill={value.f1}></rect>
                <rect x=".15" y="0.071" width={value.w} height={value.h2} fill={value.f2}></rect>
            </pattern>
        )
    }

    return(
        <svg className="logo" xmlns="http://www.w3.org/2000/svg">
            <defs>{defs}</defs>
            <svg width="38%" height="100%" >
            <rect width="100%" height="100%" fill="#443380"/>
            <rect x="10%" y="0" width="20%" height="100%" fill="url(#basicBox1)"/>
            <rect x="28%" y="3.55%" width="20%" height="100%" fill="url(#basicBox2)"/>
            <rect x="50%" y="0" width="20%" height="100%" fill="url(#basicBox3)"/>
            <rect x="73%" y="3.55%" width="23%" height="100%" fill="url(#basicBox4)"/>
            </svg>
            <svg x="33%" width="38%" height="100%">
            <rect x="33%" width="100%" height="100%" fill="#fff"></rect>
            <rect x="10%" y="3.55%" width="20%" height="100%" fill="url(#basicBox5)"/>
            <rect x="30%" y="0" width="20%" height="100%" fill="url(#basicBox6)"/>
            <rect x="50%" y="3.55%" width="20%" height="100%" fill="url(#basicBox7)"/>
            <rect x="70%" y="0" width="23%" height="100%" fill="url(#basicBox8)"/>
            <rect x="88%" y="3.55%" width="23%" height="100%" fill="url(#basicBox9)"/>
            </svg>
        </svg>
    )

}

export default Logo;