import Accordian from "./components/accordian";
import Detail from "./components/detail";
import "./App.css";

function App() {
	return (
		<Accordian>
			<Detail summary="How do you create an accordion?">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s
			</Detail>
			<Detail summary="What if I have to support IE11 or older browsers?">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s
			</Detail>
			<Detail summary="What type of content can I have inside one of these?">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s
			</Detail>
			<Detail summary="How does it work?">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s
			</Detail>
			<Detail summary="Nested Accordian?">
				<Accordian>
					<Detail summary="How does it work?">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s
          </Detail>
          <Detail summary="How does it work?">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s
					</Detail>
				</Accordian>
				
			</Detail>
		</Accordian>
	);
}

export default App;
