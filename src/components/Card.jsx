function Card({ icone, titulo, valor }) {
    return (
       
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      width: "400px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      
      <div style={{ fontSize: "30px" }}>
        {icone}
      </div>

      <div style={{ fontSize: "18px", color: "#555" }}>
        {titulo}
      </div>

      <div style={{ fontSize: "28px", fontWeight: "bold" }}>
        {valor}
      </div>

    </div>
    );
}

export default Card;