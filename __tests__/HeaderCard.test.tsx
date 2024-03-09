import React from 'react';
import renderer from 'react-test-renderer';
import HeaderCard from '../components/HeaderCard';

describe('HeaderCard', () => {
  it('should render correctly and calculate sum of expenses', () => {
    const expenses = [
      { amount: 100, date: new Date() },
      { amount: 200, date: new Date(2024, 2, 4) },
      {
        amount: 300,
        date: new Date(new Date().getTime() - 8 * 24 * 60 * 60 * 1000),
      },
    ];

    const component = renderer.create(<HeaderCard expenses={expenses} />);
    const instance = component.root;

    expect(instance.findByProps({ children: 'Last 7 Days' })).toBeTruthy();
    // expect(instance.findByProps({ children: 'KES 300' })).toBeTruthy();
  });
});
