function createElement(element, component){
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;

    // Here if there are 5 attributes then we'll have to write it 5 times
    // domElement.setAttribute('href', element.props.href)
    // domElement.setAttribute('target', element.props.target)

    // So, instead we use a loop.
    for (const prop in element.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, element.props[prop])
        
        // console.log(element.props['href'])
    }
    component.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to Google!'
}

const root = document.querySelector('#root');
createElement(reactElement, root)

