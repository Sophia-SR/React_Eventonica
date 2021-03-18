import React from 'react'; 

const UserForm = () => {
    const [suffix, setSuffix] = useState([]);
    const [city, setCity] = useState([]);
    const [abbrevState, setAbbrevState] = useState([]);
    return (
      <>
        <form>
          <div>
            <label>
              Suffix
              <input
                name="Suffix"
                type="text"
                value={suffix}
                onChange={(e) => {
                  console.log(suffix);
                  setSuffix(e.target.value);
                }}
              ></input>
            </label>
            <br />
            <label>
              City
              <input
                name="City"
                type="text"
                required
                value={city}
                onChange={(e) => {
                  console.log(city);
                  setCity(e.target.value);
                }}
              ></input>
            </label>
            <br />
            <label>
              CA
              <input name="" type="radio"></input>
            </label>
            <label>
              OR
              <input name="" type="radio"></input>
            </label>
            <button type="submit">Submit</button>
          </div>
        </form>
        {/* {
          (onSubmit = (e) => {
            e.preventDefault();
            console.log(suffix);
          })
        } */}
      </>
    );
  };
  

export default UserForm