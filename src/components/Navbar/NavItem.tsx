import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export function NavItem({
  data,
  index,
}: { data: { name: string, path: string }, index: number }): JSX.Element {

  return (<NavLink
    to={data.path}
    className={({ isActive }) =>
      classNames("w-full md:py-6 md:px-4 py-5 px-10 mt-2 flex align-baseline border-r-4 md:border-r-0 md:border-b-4", (isActive ? "border-white" : "border-transparent"))
    }
    end
  ><span className="font-bold mr-3">{index + 1}</span> {data.name}

  </NavLink>);
}