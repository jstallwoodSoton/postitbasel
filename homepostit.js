let displayTexts = [
    [
        String.raw`$$ \sum_{k = 1}^{\infty} \frac{1}{k^2} = \frac{\pi^2}{6}$$`
    ],
    [
        String.raw `<img src="./img/euler.jpg">`,
        String.raw`<p>The sum of the squared reciprocals from one to infinity,</p>`,
        String.raw`<p>was such a hard problem to fix.</p>`,
        String.raw`<p>Though thanks to Euler's algebreic affinity we know</p>`,
        String.raw`<p>the answer's pi squared over six!</p>`
    ],
    [
        String.raw`$$ sin x = x(x - \pi)(x + \pi)(x - 2\pi)(x + 2\pi)... $$`, 
        String.raw`$$ sin x = x(x^2 - \pi^2)(x^2 - 2^{2}\pi^2)... $$`,
        String.raw`$$ (x^2 - a^2\pi^2) = \frac{-1}{a^2\pi^2}\left(1 - \frac{x^2}{a^2\pi^2}\right)$$`, 
        String.raw`$$ \text{Let } A = \prod_{a = 1}^{\infty} \frac{-1}{a^2\pi^2}$$`,
        String.raw`$$ sin x = xA\left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{2^2\pi^2}\right)...$$`
    ],
    [
        String.raw`$$ \frac{sin x}{x} = A\left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{2^2\pi^2}\right)...$$`,
        String.raw`$$ \lim_{x \rightarrow 0} \frac{sin x}{x} = \lim_{x \rightarrow 0} A\left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{2^2\pi^2}\right)...$$`,
        String.raw`$$ 1 = A(1)(1)... \implies A = 1$$`,
        String.raw`$$ \frac{sin x}{x} = \left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{2^2\pi^2}\right)...$$`,
        String.raw`$$ \frac{sin x}{x} = \left(1 - x^2\left(\frac{1}{\pi^2} + \frac{1}{2^2\pi^2} + ...\right) + ...\right) $$`
    ],
    [
        String.raw`$$ sin x = \left(x - x^3\left(\frac{1}{\pi^2} + \frac{1}{2^2\pi^2} + ...\right) + ...\right) $$`,
        String.raw`$$ sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - ...$$`,
        String.raw`$$ \therefore \left(\frac{1}{\pi^2} + \frac{1}{2^2\pi^2} + ...\right) = \frac{1}{3!}$$`,
        String.raw`$$ \frac{1}{\pi^2}\left(\frac{1}{1^2} + \frac{1}{2^2} + ...\right) = \frac{1}{3!}$$`,
        String.raw`$$ \sum_{k = 1}^{\infty} \frac{1}{k^2} = \frac{\pi^2}{6}$$`
    ]
];

function changeDisplay(index, data_col) {
    let displayDiv = document.getElementById("postit-post");
    displayDiv.innerHTML = "";
    switch(data_col) {
        case "def":
            displayDiv.style.backgroundColor = "#14d0f0";
            break;
        case "app":
            displayDiv.style.backgroundColor = "#ffe552";
            break;
        case "exp":
            displayDiv.style.backgroundColor = "#35e2c3";
            break;
        default:
            displayDiv.style.backgroundColor = "#ff83c3";
            break;
    }
    displayTexts[index].forEach(line => {
        displayDiv.innerHTML += line;
    });
    MathJax.typeset();
}

document.changeDisplay = changeDisplay;