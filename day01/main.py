#! /usr/bin/env python3
import pandas as pd
import numpy as np
import os
import sys

def preprocess_data(file_name):
    df = pd.read_csv(file_name, sep=' ', header=None)
    df.drop([1, 2], axis=1, inplace=True)
    print('Dataframe before sorting:\n', df)
    df = df.apply(lambda x: x.sort_values().values, axis=0)
    print('Dataframe after sorting:\n', df)
    df = df.rename(columns={0: 'col0', 3: 'col1'})
    print('Dataframe after resetting index:\n', df)
    return df

def algo(df):
    dist = []
    for index, row in df.iterrows():
        if (row['col0'] > row['col1']):
            dist.append(row['col0'] - row['col1'])
        else:
            dist.append(row['col1'] - row['col0'])
    return sum(dist)

if __name__ == "__main__":
    file_name = sys.argv[1]
    df = preprocess_data(file_name)
    res = algo(df)
    print('Result:', res)