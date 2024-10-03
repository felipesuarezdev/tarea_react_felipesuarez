import React, { useState } from 'react'

function Content() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <p>Bienvenido a mi proyecto React</p>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>
          El contador es: {count}
        </button>
      </p>
    </main>
  )
}

export default Content
