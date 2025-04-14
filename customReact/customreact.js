function customRender(reactElement, container) {
    // 4

    // first code --- revise it first --- only for one attribute
    // more properties aa jaye toh code long ho jayega so niche we used a loop in new code
    
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    // new code -- modular
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    // if props ke andar aur properties hoti toh loop se easy padta..
    for(const prop in reactElement.props){
        if(prop==='children') continue; // safety point se lagaya // if props mai koi children hai?

        domElement.setAttribute(prop, reactElement.props[prop])
    }
    
    container.appendChild(domElement)
}

// 2
// humne apna custom element bna diya hai
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// 1
const mainContainer = document.querySelector('#root')

// 3
customRender(reactElement, mainContainer)