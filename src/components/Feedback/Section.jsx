import PropTypes from 'prop-types';

export default function Section(prop) {
  return <div>{prop.children}</div>;
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
};
