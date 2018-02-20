import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme/lib';

configure({ adapter: new Adapter() });
