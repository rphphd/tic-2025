import Logo from './tic-logo.tsx';
import Boxes from './boxes.tsx';

const Header = () => {
  return (
    <div className="outer">
      <div className="logo-block">
        <Logo />
        <div>
          <h2>Technology Impact Consulting, LLC</h2>
          <p>
            Assessing the impact of technology on your company's strategy, vision, and product development - a&nbsp;
            view&nbsp;from&nbsp;<strong>Richard&nbsp;P.&nbsp;Hooper,&nbsp;Ph.D</strong>
          </p>
        </div>
      </div>
      <Boxes />
    </div>
  );
};

export default Header;
