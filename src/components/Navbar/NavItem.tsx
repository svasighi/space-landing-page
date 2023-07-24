import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export function NavItem({
  data,
  index,
}: { data: { name: string, path: string }, index: number }): JSX.Element {

  return (
    <NavLink
      to={data.path}
      className={({ isActive }) =>
        classNames("w-full md:px-4 md:py-6 py-2 pr-28 mt-6 flex align-baseline border-r-4 md:border-r-0 md:border-b-4 text-lg", (isActive ? "border-white" : "border-transparent"))
      }
      end><span className="font-bold mr-3">{index.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })}</span> {data.name}

    </NavLink>
  );
}