import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels( {setSelectedCity}) {
  const [zone, setZone] = React.useState('');

  const handleChange = (event) => {
    setZone(event.target.value);
    setSelectedCity(getCityData(event.target.value))

  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={zone}
          label="zone"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="MexicoCity">Mexico City</MenuItem>
          <MenuItem value="NewYork">New York</MenuItem>
          <MenuItem value="LosAngeles">Los Angeles</MenuItem>
          <MenuItem value="Toronto">Toronto</MenuItem>
          <MenuItem value="Chicago">Chicago</MenuItem>
          <MenuItem value="Houston">Houston</MenuItem>
          <MenuItem value="Montreal">Montreal</MenuItem>
          <MenuItem value="Vancouver">Vancouver</MenuItem>
          <MenuItem value="CiudaddeGuatemala">Ciudad de Guatemala</MenuItem>
          <MenuItem value="SanSalvador">San Salvador</MenuItem>
          <MenuItem value="Tegucigalpa">Tegucigalpa</MenuItem>
          <MenuItem value="SanJosé">San José</MenuItem>
          <MenuItem value="CiudaddePanamá">Ciudad de Panamá</MenuItem>
          <MenuItem value="Managua">Managua</MenuItem>
          <MenuItem value="Belmopán">Belmopán</MenuItem>
          <MenuItem value="SanPedroSula">San Pedro Sula</MenuItem>
          <MenuItem value="SãoPaulo">São Paulo</MenuItem>
          <MenuItem value="BuenosAires">Buenos Aires</MenuItem>
          <MenuItem value="RíodeJaneiro">Río de Janeiro</MenuItem>
          <MenuItem value="Bogotá">Bogotá</MenuItem>
          <MenuItem value="Lima">Lima</MenuItem>
          <MenuItem value="Santiago">Santiago</MenuItem>
          <MenuItem value="Quito">Quito</MenuItem>
          <MenuItem value="Caracas">Caracas</MenuItem>


        </Select>
        <FormHelperText>select a city</FormHelperText>
      </FormControl>
    </div>
  );
}

function getCityData(name){

    const data = {
        MexicoCity:{
            city: "Mexico City",
            countryCode: "MX"
        },
        NewYork:{
            city: "New York",
            countryCode: "US"
        },
       
        LosAngeles:{
            city: "Los Angeles",
            countryCode: "US"
        },
       
        Toronto:{
            city: "Toronto",
            countryCode: "CA"
        },
       
        Chicago:{
            city: "Chicago",
            countryCode: "US"
        },
       
        Houston:{
            city: "Houston",
            countryCode: "US"
        },
       
        Montreal:{
            city: "Montreal",
            countryCode: "CA"
        },
       
        Vancouver:{
            city: "Vancouver",
            countryCode: "CA"
        },
       
        CiudaddeGuatemala:{
            city: "Ciudad de Guatemala",
            countryCode: "GT"
        },
       
        SanSalvador:{
            city: "San Salvador",
            countryCode: "SV"
        },
       
        Tegucigalpa:{
            city: "Tegucigalpa",
            countryCode: "HN"
        },
        SanJosé:{
            city: "San José",
            countryCode: "CR"
        },
       
        CiudaddePanamá:{
            city: "Ciudad de Panamá",
            countryCode: "PA"
        },
       
        Managua:{
            city: "Managua",
            countryCode: "NI"
        },
       
        Belmopán:{
            city: "Belmopán",
            countryCode: "BZ"
        },
       
        SanPedroSula:{
            city: "San Pedro Sula",
            countryCode: "HN"
        },
       
        SãoPaulo:{
            city: "São Paulo",
            countryCode: "BR"
        },
       
        BuenosAires:{
            city: "Buenos Aires",
            countryCode: "AR"
        },
       
        RíodeJaneiro:{
            city: "Río de Janeiro",
            countryCode: "BR"
        },
       
        Bogotá:{
            city: "Bogotá",
            countryCode: "CO"
        },
        Lima:{
            city: "Lima",
            countryCode: "PE"
        },
        Santiago:{
            city: "Santiago",
            countryCode: "CL"
        },
        Caracas:{
            city: "Caracas",
            countryCode: "VE"
        },
        Quito:{
            city: "Quito",
            countryCode: "EC"
        },
       
    }
    
    if(data[name] === undefined){
        return {};
    }

    return data[name]
}





