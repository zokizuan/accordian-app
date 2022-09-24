
const Detail = ({summary,children}) => {
	return (
		<>
			<details>
      <summary>{summary}</summary>
			<div className="data">
				{children}
      </div>
      </details>
		</>
	);
};
export default Detail;
