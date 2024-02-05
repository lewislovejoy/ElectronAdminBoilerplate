import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function WizIconBox({ icon }) {
  return (
    <div
      style={{
        background: '#ebeef6',
        borderRadius: 4,
        color: '#464a53',
        padding: 6,
        paddingLeft: 10,
        width: 38,
        height: 38,
        float: 'right',
        marginRight: 10,
        fontSize: 18,
      }}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
