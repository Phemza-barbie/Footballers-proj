import Players from "./Components/Players";
const App = () => {
  const employees = [
    {
      fname: "Femi",
      position: "Position: Striker",
      image: "https://www.nydailynews.com/wp-content/uploads/migration/2016/01/25/3ZKRAVRSRYYIHRZL2OVSM52UYE.jpg",
      team: "Team: Man city",
      age:"Age: 36",
    },
    {
      fname: "Gareth Bae",
      position: "Position: Left back",
      image: "http://t0.gstatic.com/images?q=tbn:ANd9GcQb0b0ql7hziKdAhTXlnUg4uVmPRzXln6Lq-O7Ugis2woVOGWDr6vw4ykA4sQk1hRY04zh6PA",
      team: "Team: Man utd",
      age:"Age: 29",
    },
    {
      fname: "Bukayo Saka",
      position: "Position: Right back",
      image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Headshot_Saka_1510x850_0.jpg?auto=webp&itok=yZpptHcr",
      team: "Team: Arsenal",
      age:"Age: 46",
    },
    {
      fname: "Ronaldo Cristiano",
      position: "Position: Left winger",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/220px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
      team: "Team: Al nassir",
      age:"Age: 37",
    },
    {
      fname: "Lionel messi",
      position: "Position: Center Midfielder",
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRWZahGYzkieBfnLHeLjSKPue1S0AokNoqyaZHE6iuKtNFZHd9ZUOkInBXoNg-JGwbSzomWlDB7SHZZ9X0",
      team: "Team: Barcelona",
      age:"Age: 34",
    },
  ];
  return (
    <>
     <h1>Footballers</h1>
     <div>
      {employees.map(({fname, position, image, team, age}, index) =>(
        <Players
        key={index}
        name={fname}
        position={position}
        image={image}
        team={team}
        age={age}
        />
      ))}
     </div>
     
    </>
  )
};

export default App
