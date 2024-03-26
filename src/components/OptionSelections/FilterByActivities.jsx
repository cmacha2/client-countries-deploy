import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllActivies,
  getCountries,
  getFilterActivities,
  showAllActivies,
} from "../../Redux/actions";
import { ContainerMenu, Options, Selectors } from "./OptionSelect.css";

export default function FilterByActivities() {
  const [nameActivity, setNameActivity] = useState('');
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities);

  // useEffect para cargar todas las actividades al montar el componente
  useEffect(() => {
    if (!allActivities.length) {
      dispatch(showAllActivies());
    }
  }, [allActivities.length, dispatch]); // Añadido dispatch a las dependencias por precaución

  const onChange = (e) => {
    setNameActivity(e.target.value);
  };

  // useEffect que depende de nameActivity
  useEffect(() => {
    if (nameActivity === 'allCountries') dispatch(getCountries());
    if (nameActivity === 'allActivities') dispatch(getAllActivies());
    if (nameActivity !== 'allCountries' && nameActivity !== '') dispatch(getFilterActivities(nameActivity));
  }, [nameActivity, dispatch]); // Añadido dispatch a las dependencias

  return (
    <ContainerMenu>
      <Selectors name="activities" id="activities" onChange={onChange}>
        <Options value={'allCountries'}>Filter by Activities</Options>
        <Options value={'allActivities'}>All contain Activities</Options>
        {allActivities.length > 0 && allActivities?.map((act) => (
          <Options key={act.id} value={act.name}>{act.name}</Options>
        ))}
      </Selectors>
    </ContainerMenu>
  );
}
