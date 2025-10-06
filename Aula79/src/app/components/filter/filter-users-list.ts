import { endOfDay, isWithinInterval, startOfDay } from "date-fns";
import { FilterOptionsInterface } from "../../interfaces/filter-options.interface";
import { UserInterface } from "../../interfaces/user/user.interface";

  const filterUserList = (filterOptions: FilterOptionsInterface, usersList: UserInterface[]): UserInterface[] => {
    let filteredList: UserInterface[] = [];
    filteredList = filterUserByName(filterOptions.name, usersList);
    filteredList = filterUsersByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
    return filteredList;
  }

  const filterUsersByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: UserInterface[]): UserInterface[] => {
    
    if (startDate === undefined || endDate === undefined) {
      return usersList;
    }

    console.log(startDate, endDate);

    const filteredListWithDate = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
      start: startOfDay(startDate),
      end: endOfDay(endDate)
     }));
  
    return filteredListWithDate;
  }

  const filterUserByName = (name: string | undefined, usersList: UserInterface[]): UserInterface[] => {
    if (name === undefined) {
      return usersList;
    }
    const nameLower = name.toLowerCase();
    const filteredListWithName = usersList.filter(user => user.nome.toLowerCase().includes(nameLower));
    return filteredListWithName;
  }

  const filterUsersByStatus = (status: boolean | undefined, usersList: UserInterface[]): UserInterface[] => {
    if (status === undefined) {
      return usersList;
    }
    const filteredListWithStatus = usersList.filter(user => user.ativo === status);
    return filteredListWithStatus;
  }
  
  export { filterUserList };