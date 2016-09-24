package com.geohack.h2o2u.tasks;

import static org.junit.Assert.*;
import org.junit.Test;

/**
 * Created by henneberger on 9/24/16.
 */
public class StatusCheckerTest {
    @Test
    public void test() throws Exception {
        StatusChecker statusChecker = new StatusChecker();
        statusChecker.doRun();
        statusChecker.notifySlack("\"There is a water quality problem in Vienna Va.\"");
    }
}