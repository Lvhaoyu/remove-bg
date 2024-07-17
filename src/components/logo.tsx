import * as React from "react"
import { JSX } from "react/jsx-runtime"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path fill="#7146E8" d="M0 0h32v32H0z" />
        <path fill="url(#c)" d="M0 0h32v16.063H0z" />
        <path fill="url(#d)" d="M0 0h32v32H0z" />
      </g>
      <path
        fill="url(#e)"
        d="M32 8.125h8v32h-8z"
        opacity={0.6}
        transform="rotate(90 32 8.125)"
      />
      <mask
        id="g"
        width={32}
        height={9}
        x={0}
        y={8}
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path
          fill="url(#f)"
          d="M32 8.125h8v32h-8z"
          opacity={0.6}
          transform="rotate(90 32 8.125)"
        />
      </mask>
      <g mask="url(#g)">
        <path
          fill="url(#h)"
          fillOpacity={0.36}
          d="M32 8.125h8v32h-8z"
          opacity={0.6}
          style={{ mixBlendMode: "overlay" }}
          transform="rotate(90 32 8.125)"
        />
      </g>
      <path
        fill="url(#i)"
        d="M32 15.858h.267v32H32z"
        transform="rotate(90 32 15.858)"
      />
      <circle cx={19} cy={13.792} r={0.067} fill="#fff" opacity={0.8} />
      <circle cx={21.667} cy={11.792} r={0.067} fill="#fff" opacity={0.2} />
      <circle cx={31} cy={10.458} r={0.067} fill="#fff" opacity={0.2} />
      <circle cx={23.667} cy={14.458} r={0.067} fill="#fff" opacity={0.5} />
      <circle cx={30.333} cy={15.125} r={0.067} fill="#fff" opacity={0.7} />
      <circle cx={24.333} cy={13.792} r={0.067} fill="#fff" opacity={0.3} />
      <circle cx={27.667} cy={12.458} r={0.067} fill="#fff" />
      <circle
        cx={0.067}
        cy={0.067}
        r={0.067}
        fill="#fff"
        opacity={0.3}
        transform="matrix(-1 0 0 1 11.733 13.058)"
      />
      <circle
        cx={0.067}
        cy={0.067}
        r={0.067}
        fill="#fff"
        opacity={0.3}
        transform="matrix(-1 0 0 1 15.067 15.058)"
      />
      <circle
        cx={0.067}
        cy={0.067}
        r={0.067}
        fill="#fff"
        opacity={0.3}
        transform="matrix(-1 0 0 1 6.4 13.058)"
      />
      <circle
        cx={0.067}
        cy={0.067}
        r={0.067}
        fill="#fff"
        opacity={0.1}
        transform="matrix(-1 0 0 1 9.067 10.392)"
      />
      <circle
        cx={0.067}
        cy={0.067}
        r={0.067}
        fill="#fff"
        opacity={0.9}
        transform="matrix(-1 0 0 1 7.733 14.392)"
      />
      <circle
        cx={0.067}
        cy={0.067}
        r={0.067}
        fill="#fff"
        opacity={0.6}
        transform="matrix(-1 0 0 1 3.733 15.725)"
      />
      <circle
        cx={0.067}
        cy={0.067}
        r={0.067}
        fill="#fff"
        opacity={0.1}
        transform="matrix(-1 0 0 1 15.733 11.058)"
      />
      <circle
        cx={0.067}
        cy={0.067}
        r={0.067}
        fill="#fff"
        opacity={0.1}
        transform="matrix(-1 0 0 1 18.4 10.392)"
      />
      <circle
        cx={0.067}
        cy={0.067}
        r={0.067}
        fill="#fff"
        opacity={0.6}
        transform="matrix(-1 0 0 1 3.067 11.725)"
      />
    </g>
    <defs>
      <linearGradient
        id="e"
        x1={41.633}
        x2={32}
        y1={23.579}
        y2={23.579}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.267} stopColor="#7146E8" />
        <stop offset={1} stopColor="#7146E8" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="f"
        x1={40}
        x2={29.9}
        y1={23.579}
        y2={23.579}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.34} stopColor="#BC46FC" stopOpacity={0.8} />
        <stop offset={1} stopColor="#BC46FC" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="i"
        x1={32.133}
        x2={32.133}
        y1={15.858}
        y2={47.858}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC6CFF" />
      </linearGradient>
      <pattern
        id="c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#j" transform="matrix(.0039 0 0 .00778 0 -.496)" />
      </pattern>
      <pattern
        id="d"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#k" transform="matrix(.00105 0 0 .00105 -.04 0)" />
      </pattern>
      <pattern
        id="h"
        width={0.167}
        height={0.042}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#l" transform="scale(.00083 .0002)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="j"
        width={256}
        height={256}
      />
      <image
        id="k"
        width={1024}
        height={1024}
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAGnUlEQVR4Ae3bbU7bWBQG4HQHsLIpG5jSDUyZFZQVTLuS0pUQiT++x5GIWEDLDpLRZWwUoJ18+JhS/FRCSUNycv28Pr6xc5nN/CNAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMAEBObz+VHbth8i4iIilhGx7n7m3WPvJsDwYjZRHi8mitksIt5GxO1GU/TN8fi2No5GGTm7iDjZMY9reYwcRtu2n3ZojAeNslgsPo48rEmWX6/Xbw7IYyWPkXaXCrtvc/TPr0GONKzJll0sFue97wG3/0wWbowNb5rm9IAQHswk9aPZGGObYs1SyvuBeazkkbjnPDoRf7zj7/r/23oymTisSZaqH60y8mjb9rs8EnahpNnjrolKKWcJQ5p0iYTZoz+greSRsCt1l2171EG3pZSvCUOabIlu9qiX1gfl0L++lHIxWcysDY+I+t1GSiD1o0HWuKZYp2uQzDyup+iYus2JzXHXZKmDm1ixrkGyDla1zmpihPmbq0HyTQ+tqEEOlRvxdRlXTDaabD7iUF996a5BNpf2DJ1NLl892tgb6CR9bOHd63cN4iR9d7Lxn1kvBW7MAEOPWNZmDYwsIv5OyqN+WSiPgXnMlsvl0Y6L4bY1jytYQ8OYzWY3NzfHSXm4gpWQx12JbgXvtgbY9ntHq6RAuhW827z/7/dmj6Qs7suUUj4fOrU3TXN+X8idwQL1XEQegxnzC9Qdfd8mqUHmj0TFKnBgHlZWj7n7dGuzdrnUWP+oygreMcP4r0nqSuutedTFifIYOYzN8l2j1EuO90sfSik1qIv657hWim5qjX9fHuMbewcCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ+DUC6/X6zY9+fs1ovOuPsqiPkXlmgaurq+PFYnEWERcRsYyIdfczr4+1bXsqmOcLZVseEfFOHs+QR0WOiJOIuN1oir45Ht8ua6M8w7Am+xb75lEbZbJYz7Hhbdt+2qExHjTKYrE4d/TKT6eatm37+YA8PsojP49Z3dH3DaN/fm2sEYY02ZJ1B5fHC4q/aZrTfmcfcHvygjbptx5KKeX9gBzqDL+KiLe/NcJLGvyjE/EHH6H2COp2Pp8fvaTt+h3HUmePjDzatv0uj4Q9IGn2uGuqUspZwpAmXSJh9ugPcCt5JOxK3aXcHnXQbSnla8KQJluimz3qpfVBOfSvL6VcTBYza8Mjon63kRJI/WiQNa4p1ukaJDOP6yk6pm5zYnPcNVnq4CZWrGuQrINVrbOaGGH+5mqQfNNDK2qQQ+VGfF3GFZONJpuPONRXX7prkM2lPUNnk8tXjzb2BjpJH1t49/pdgzhJ351s/GfWS4EbM8DQI5a1QAMjS8yjfln458DhePlyuTyqXyolNIkrJgm7083NzbE8EiAzS9RlCQkNYvZICiUhD7NHUhb3ZUope6/k7ZuqaZrz+0LuDBao5yKllL1X8nZ5rJqm+Th4EAo8Fag7erfQbddzkbqcwUrep5Qpj8gjhTG3SLc263pLo6y6z8lWjObyP6m2ax4R8a2U8seTAh4YR6AL5ktEXHbNUmeL2jhf2rb9YKXoOO4/q7olj7/k8TM5jxMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAg8NoE/gWBN6sLMoJNqwAAAABJRU5ErkJggg=="
        id="l"
        width={200}
        height={200}
      />
      <clipPath id="a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent