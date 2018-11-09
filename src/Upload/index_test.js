// -*- mode: rjsx -*-
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {assert} from 'chai';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';

import Upload from './index';

Enzyme.configure({ adapter: new Adapter() });

const mountWithTheme = (node) => mount(
    node,
    {
        context: {muiTheme: createMuiTheme()},
        childContextTypes: {muiTheme: PropTypes.object}
    }
);

describe('Upload', () => {
    const newUpload = (props = {}) => mountWithTheme(
        <Upload {...props}/>
    );

    it(
        'always renders an input',
        () => {
            const nodes = newUpload().find('input');
            assert.equal(nodes.length, 1);
        }
    );
});
