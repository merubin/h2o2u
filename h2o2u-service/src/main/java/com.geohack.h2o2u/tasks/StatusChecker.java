package com.geohack.h2o2u.tasks;

import java.util.concurrent.TimeUnit;
import org.knowm.sundial.annotations.SimpleTrigger;
import org.knowm.sundial.exceptions.JobInterruptException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.knowm.sundial.annotations.SimpleTrigger;
import org.knowm.sundial.exceptions.JobInterruptException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.TimeUnit;

@SimpleTrigger(repeatInterval = 1, timeUnit = TimeUnit.MINUTES, isConcurrencyAllowed=true)
public class StatusChecker extends org.knowm.sundial.Job {
    private static final Logger logger = LoggerFactory.getLogger(StatusChecker.class);


    @Override
    public void doRun() throws JobInterruptException {
        logger.info("Its running");

    }
}
